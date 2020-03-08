const express = require("express");
const router = express.Router();

const { auth } = require("../middleware/auth");

const UserController = require("../controllers/users");
const AuthController = require("../controllers/auth");
const TicketController = require("../controllers/tickets");
const OrderController = require("../controllers/orders");

router.post("/login", AuthController.login);
router.post("/register", AuthController.register);
router.get("/auth", auth, AuthController.auth);

router.get("/users", auth, UserController.showAll);
router.get("/user/:id", auth, UserController.show);
router.put("/user/:id", auth, UserController.update);
router.delete("/user/:id", auth, UserController.destroy);

router.get("/tickets", TicketController.index);
router.get("/ticketSearch", TicketController.search);

router.get("/orders", auth, OrderController.index);
router.get("/order", auth, OrderController.show);
router.put("/order/:id", auth, OrderController.update);
router.delete("/order/:id", auth, OrderController.destroy);

module.exports = router;
