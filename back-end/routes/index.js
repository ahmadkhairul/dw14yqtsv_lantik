const express = require("express");
const router = express.Router();

const { auth } = require("../middleware/auth");

const UserController = require("../controllers/users");
const AuthController = require("../controllers/auth");
const TicketController = require("../controllers/tickets");
const OrderController = require("../controllers/orders");
const StationController = require("../controllers/stations");

router.post("/login", AuthController.login);
router.post("/register", AuthController.register);
router.get("/auth", auth, AuthController.auth);

router.get("/users", auth, UserController.showAll);
router.get("/user/:id", auth, UserController.show);
router.put("/user/:id", auth, UserController.update);
router.delete("/user/:id", auth, UserController.destroy);

router.get("/tickets", TicketController.index);
router.post("/ticketSearch", TicketController.search);
router.post("/ticket", auth, TicketController.save);

router.get("/orders", auth, OrderController.index);
router.get("/order", auth, OrderController.show);
router.get("/order/:id", auth, OrderController.showId);
router.post("/order/sort", auth, OrderController.sort);

router.put("/order/:id", auth, OrderController.update);
router.delete("/order/:id", auth, OrderController.destroy);
router.post("/order", auth, OrderController.save);
router.post("/order/proof/:id", auth, OrderController.updateProof);

router.get("/stations", StationController.index);

module.exports = router;
