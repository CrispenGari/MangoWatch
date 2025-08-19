from fastapi.testclient import TestClient
from app import app

client = TestClient(app)


class TestApI:
    def test_root(self):
        res = client.get("/")
        assert res.status_code == 200
        assert res.json() == {
            "title": "MangoWatch API",
            "description": "API for detecting disease in mango fruits images.",
            "version": "0.0.1",
        }

    def test_prediction_with_error_1(self):
        res = client.post("/api/v1/mango/predict/unknown")
        assert res.status_code == 404

    def test_healthy_prediction(self):
        files = {"image": ("images/healthy.jpg", open("images/healthy.jpg", "rb"))}
        res = client.post("/api/v1/mango/predict", files=files)
        data = res.json()

        assert res.status_code == 200
        assert data["ok"] is True
        assert data["status"] == "ok"
        assert data["prediction"]['top_prediction']["label"] == 3
        assert data["prediction"]['top_prediction']["type"] == "Healthy"

    def test_alternaria_prediction(self):
        files = {"image": ("images/alternaria.jpg", open("images/alternaria.jpg", "rb"))}
        res = client.post("/api/v1/mango/predict", files=files)
        data = res.json()

        assert res.status_code == 200
        assert data["ok"] is True
        assert data["status"] == "ok"
        assert data["prediction"]['top_prediction']["label"] == 0
        assert data["prediction"]['top_prediction']["type"] == "Alternaria"

    def test_anthracnose_prediction(self):
        files = {"image": ("images/Anthracnose.jpg", open("images/anthracnose.jpg", "rb"))}
        res = client.post("/api/v1/mango/predict", files=files)
        data = res.json()

        assert res.status_code == 200
        assert data["ok"] is True
        assert data["status"] == "ok"
        assert data["prediction"]['top_prediction']["label"] == 1
        assert data["prediction"]['top_prediction']["type"] == "Anthracnose"

    def test_black_mold_rot_prediction(self):
        files = {"image": ("images/black_mold_rot.jpg", open("images/black_mold_rot.jpg", "rb"))}
        res = client.post("/api/v1/mango/predict", files=files)
        data = res.json()

        assert res.status_code == 200
        assert data["ok"] is True
        assert data["status"] == "ok"
        assert data["prediction"]['top_prediction']["label"] == 2
        assert data["prediction"]['top_prediction']["type"] == "Black Mould Rot"

    def test_stem_end_rot_prediction(self):
        files = {"image": ("images/stem_end_rot.jpg", open("images/stem_end_rot.jpg", "rb"))}
        res = client.post("/api/v1/mango/predict", files=files)
        data = res.json()

        assert res.status_code == 200
        assert data["ok"] is True
        assert data["status"] == "ok"
        assert data["prediction"]['top_prediction']["label"] == 4
        assert data["prediction"]['top_prediction']["type"] == "Stem end Rot"
