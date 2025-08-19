## MangoWatch

🥭🥭MangoWatch is a React Native mobile application powered by AI (MobileNetV3) that helps farmers and agricultural enthusiasts detect diseases in mango fruits from images. Using a REST API server, the app analyzes uploaded mango images and provides real-time disease predictions, enabling timely intervention to protect crops and maximize yield.

<p align="center"><img src="/images/adaptive-icon.png" alt="logo" width="200"/></p>

> This repository contains two main sub directory which are:

1. `mobile` - The mobile app that does predictions by sending requests to the API server using images of a mango fruits images.
2. `server` - This is an API server that serves an `MobileNetV3` model that does Disease detection based on on an mango fruits.

<p align="center">
  <a href="https://github.com/crispengari/MangoWatch/actions/workflows/ci.yml">
    <img src="https://github.com/crispengari/MangoWatch/actions/workflows/ci.yml/badge.svg" alt="CI Status">
  </a>
   <a href="https://github.com/crispengari/MangoWatch/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License: MIT">
  </a>
  <a href="https://typescriptlang.org/">
    <img src="https://img.shields.io/badge/language-typescript-blue.svg" alt="Language: TypeScript">
  </a>
  <a href="https://www.python.org/">
    <img src="https://img.shields.io/badge/language-python-blue.svg" alt="Language: Python">
  </a>
</p>

### Features

- Disease detection for mango fruits using AI (MobileNetV3)
- Easy image upload from the device camera or gallery
- Real-time predictions served via a REST API
- User-friendly interface for quick and accurate results
- Helps farmers prevent crop losses and improve productivity

### Technology Stack

- **Frontend:** React Native (Expo)
- **Backend/AI:** Python, FastAPI, MobileNetV3
- **API:** REST
- **Machine Learning:** PyTorch

### Usage

1. Capture or upload an image of mango fruit image.
2. The app sends the image to the AI server for analysis.
3. Receive instant prediction results and recommended actions.

### Future Enhancements:

- Support for other fruit crops
- Multilingual support for wider accessibility
- Offline predictions for areas with poor connectivity

### Sample ScreenShots

The following screenshots shows the basic UI of the mobile application.

<p align="center">
  <img src="/images/0.jpeg" alt="UI" width="200"/>
  <img src="/images/1.jpeg" alt="UI" width="200"/>
  <img src="/images/2.jpeg" alt="UI" width="200"/>
  <img src="/images/3.jpeg" alt="UI" width="200"/>
  <img src="/images/4.jpeg" alt="UI" width="200"/>
  <img src="/images/5.jpeg" alt="UI" width="200"/>
  <img src="/images/6.jpeg" alt="UI" width="200"/>
  <img src="/images/7.jpeg" alt="UI" width="200"/>
  <img src="/images/8.jpeg" alt="UI" width="200"/>
  <img src="/images/9.jpeg" alt="UI" width="200"/>
</p>

### 📸 Example Prediction

You can send the request to the server. Here are some examples of requests that are send to the server using `cURL` locally.

```shell
# healthy
cURL -X POST -F image=@healthy.jpg http://127.0.0.1:8000/api/v1/mango/predict

# alternaria
cURL -X POST -F image=@alternaria.jpg http://127.0.0.1:8000/api/v1/mango/predict

# anthracnose
cURL -X POST -F image=@anthracnose.jpg http://127.0.0.1:8000/api/v1/mango/predict

# black_mold_rot
cURL -X POST -F image=@black_mold_rot.jpg http://127.0.0.1:8000/api/v1/mango/predict

# stem_end_rot
cURL -X POST -F image=@stem_end_rot.jpg http://127.0.0.1:8000/api/v1/mango/predict

```

### Server API Response

The following is the API expected response.

```json
{
  "time": 0.04048776626586914,
  "ok": true,
  "status": "ok",
  "prediction": {
    "predictions": [
      { "label": 0, "probability": 0.0, "type": "Alternaria" },
      { "label": 1, "probability": 0.0, "type": "Anthracnose" },
      { "label": 2, "probability": 0.0, "type": "Black Mould Rot" },
      { "label": 3, "probability": 0.9800000190734863, "type": "Healthy" },
      {
        "label": 4,
        "probability": 0.019999999552965164,
        "type": "Stem end Rot"
      }
    ],
    "top_prediction": {
      "label": 3,
      "probability": 0.9800000190734863,
      "type": "Healthy"
    }
  }
}
```

### Notebooks

The notebooks that were used to train the model can be found in this folder [`12_MANGO_DISEASE_DETECTION`](https://github.com/CrispenGari/cv-torch/blob/main/12_MANGO_DISEASE_DETECTION/00_mobilenetv3.ipynb).

### LICENSE

This project is using the [`MIT`](/LICENSE) LICENSE which reads as follows:
