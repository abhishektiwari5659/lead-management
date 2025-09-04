
import Lead from "../models/Lead.js";

export const listLeads = async (req, res) => {
  try {
    const { q, status } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (q) {
      filter.$or = [
        { name: new RegExp(q, "i") },
        { email: new RegExp(q, "i") },
        { phone: new RegExp(q, "i") },
      ];
    }
    const data = await Lead.find(filter).sort({ createdAt: -1 });
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const createLead = async (req, res) => {
  try {
    const lead = new Lead(req.body);
    await lead.save();
    res.status(201).json(lead);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export const updateLead = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Lead.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: "Lead not found" });
    res.json(updated);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export const deleteLead = async (req, res) => {
  try {
    const { id } = req.params;
    const removed = await Lead.findByIdAndDelete(id);
    if (!removed) return res.status(404).json({ error: "Lead not found" });
    res.json({ success: true });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};
