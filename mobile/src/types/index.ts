export type THistory = {
  id: string;
  date: Date;
  prediction: Prediction;
  mango: string;
};

export interface TPrediction {
  label: number;
  probability: number;
  type: string;
}

export interface Prediction {
  predictions: TPrediction[];
  top_prediction: TPrediction;
}

export interface TPredictionResponse {
  time: number;
  ok: boolean;
  status: string;
  prediction?: Prediction;
  error?: string;
}
