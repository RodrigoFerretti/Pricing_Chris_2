import express from "express";
import { NegotiationController } from "./api/negotiationController";
import { PromotionController } from "./api/promotionController";

const app = express();

app.use(express.json());

app.post('/negotiation', NegotiationController.post);
app.post('/promotion', PromotionController.post)

app.listen(3000, () => console.log('API running on PORT: 3000'));
