### Using cURL

The following commands can be used to test the API using `cURL`.

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

### Expected Response

The following is the API expected response.

```json
{
  "time": 0.19463062286376953,
  "ok": true,
  "status": "ok",
  "prediction": {
    "predictions": [
      { "label": 0, "probability": 0.0, "type": "Alternaria" },
      { "label": 1, "probability": 0.0, "type": "Anthracnose" },
      { "label": 2, "probability": 0.0, "type": "Black Mould Rot" },
      { "label": 3, "probability": 1.0, "type": "Healthy" },
      { "label": 4, "probability": 0.0, "type": "Stem end Rot" }
    ],
    "top_prediction": { "label": 3, "probability": 1.0, "type": "Healthy" }
  }
}
```

### Testing the API.

To run some unit test on the API you run the following command:

```shell
pytest
```

### Staring the server using `uvicorn`

```shell
uvicorn app:app --host 0.0.0.0 --port 8000
```

Now we can get the ipv4 ip address by running the following command:

```shell
ifconfig # mac and linux

ipconfig  # windows
```

Now the base server url will look as follows:

```shell
http://192.168.1.50:8000
```
