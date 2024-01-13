# Brain-Tumor-Classification

# Binary Class Brain Tumor Classification using Digital Image Processing and Deep Learning

In this repository, the focus is specifically on binary class brain tumor classification, indicating the differentiation between tumor presence and absence. Digital Image Processing techniques are employed to preprocess and enhance the input medical images, ensuring optimal data quality for subsequent analysis. The integration of Deep Learning models, particularly Convolutional Neural Networks (CNNs), allows for the automatic extraction of intricate patterns and features, ultimately enhancing the accuracy and efficiency of binary brain tumor classification. Finally Model is Deployed using Docker. This containerization approach ensures easy deployment across various platforms, maintaining consistency in the execution of the brain tumor classification system


The Repository contains the Following SubFolders : 
#  1. Model (For Model Training and Testing )
      a. Contains the Model Pre-Processed using Image Processing Techniques and then using SVM for Classification.
      b. Used CNN for Classification
#  2. Backend (Used Flask for Backend)
#  3. Frontend (Used React for Frontend)

The Model have also been Deployed on Docker Containers with respective Dockerfile in respective Folders.

# To Run this Model :
1. Run on Terminal "python backend.py" in Backend Folder.
2. Run on Terminal "npm start" in Frontend Folder.
3. Navigate to localhost.
4. Upload "Brain Tumor/Healthy" images.
5. See the Results.
