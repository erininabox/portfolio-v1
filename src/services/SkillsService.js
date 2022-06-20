import firebase from "../firebase";

const db = firebase.collection("/skills");

const getAll = () => {
  return db;
};

const create = (data) => {
  return db.add(data);
};

const update = (id, value) => {
  return db.doc(id).update(value);
};

const remove = (id) => {
  return db.doc(id).delete();
};

const SkillsService = {
  getAll,
  create,
  update,
  remove
};

export default SkillsService;