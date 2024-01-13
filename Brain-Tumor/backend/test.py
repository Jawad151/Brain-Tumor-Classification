from flask import Flask, request, jsonify
import cv2
import numpy as np
from PIL import Image
from flask_cors import CORS, cross_origin
from skimage.feature import hog
import joblib
from sklearn.svm import SVC

# Load the SVM model from the joblib file
loaded_model = joblib.load('svm_model.joblib')

pil_image = Image.open("H.jpg")
pil_image = np.array(pil_image)

image = cv2.cvtColor(pil_image, cv2.COLOR_BGR2GRAY)  # Convert to grayscale
image = cv2.GaussianBlur(image, (3, 3), 0)
image = cv2.resize(image, (324, 324)) 
    
features, _ = hog(image, orientations=8, pixels_per_cell=(12, 12), cells_per_block=(2, 2), block_norm='L2-Hys', visualize=True)
pred = loaded_model.predict(features.reshape(1,-1)) 

response_data = {
    'model_output': str(pred[0]),
}

print(response_data)