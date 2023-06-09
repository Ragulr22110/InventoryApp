const express = require('express');
const itemsModel = require('../../models/Inventory/itemsModel');
const inventoryAdjModel = require('../../models/Inventory/inventoryAdjustmentsModel');
const moment = require('moment');
const router = express.Router();

// update items
router.put('/adjust-items/:id', async (req, res) => {
    const adjustments = new inventoryAdjModel(req.body);
    if (req.body.quantity) {
        await itemsModel.findByIdAndUpdate(req.params.id, { $set: { opening_stock: req.body.quantity } });
    }
    else if (req.body.value) {
        await itemsModel.findByIdAndUpdate(req.params.id, { $set: { selling_price: req.body.value } });
    }
    const data = await adjustments.save();
    res.send({ success: data });
});

// get adjustment reports
router.get('/adjust-reports', async (req, res) => {
    const data = await inventoryAdjModel.find({});
    res.send({ success: data })
});

// read data by specific date
router.post('/date-range-reports/:start/:end', async (req, res) => {
    try {
        const { start, end } = req.params;

        const startDate = moment(start).startOf('date');
        const endDate = moment(end).endOf('date');

        const data = await inventoryAdjModel.find({ date: { $gte: startDate, $lte: endDate } });
        res.send({ success: data });
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = router;