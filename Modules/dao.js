import model from "./model.js";
export const createModule = (module) => model.create(module);
export const findAllModules = () => model.find();
export const findModuleById = (moduleId) => model.findById(moduleId);
export const updateCourse = (moduleId, module) =>  model.updateOne({ _id: moduleId }, { $set: module });
export const deleteCourse = (moduleId) => model.deleteOne({ _id: moduleId });