import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { iProduct } from "../../contexts/CartContext";
import { stripe } from "../../lib/stripe";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { products } = req.body as { products: iProduct[] };

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  if (!products) {
    return res.status(404).json({ error: "Products not found." });
  }

  const sucessUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}`;

  const checkoutSession = await stripe.checkout.sessions.create({
    line_items: products.map((product) => ({
      price: product.defaultPriceId,
      quantity: 1,
    })),
    mode: "payment",
    success_url: sucessUrl,
    cancel_url: cancelUrl,
  });

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  });
}
