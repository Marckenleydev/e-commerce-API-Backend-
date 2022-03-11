const router = require("express").Router();
const stripe = require("stripe")("sk_test_51JoAD8FlrPHdg2hCSidcqbm3bF555IUFLIoZouSIqWzrjRhLaO6rrMrqjVrCF1hpeYVlJx4fqAFkTlaZdIII66I300V5Xynv25");

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});


module.exports  = router;