const router = require("express").Router();

const Todo = require("../models/Todo.model")

// Aqui todas nuestras rutas de CRUD sobre Todo

// GET "/api/todo" => enviar al FE todos los titulos de los Todo
router.get("/", async (req, res, next) => {

  try {
    const response = await Todo.find().select({ title: 1 }) // el select para solo buscar los titulos
    console.log(response)
    res.json(response)

  } catch (error) {
    next(error)
  }
})

// POST "/api/todo" => recibir del FE los detalles de un Todo y crearlo en la BD
router.post("/", async (req, res, next) => {

  // console.log(req.body)
  const { title, description, isUrgent } = req.body

  try {
    await Todo.create({
      title,
      description,
      isUrgent
    })
    res.json("Documento Creado")
    
  } catch (error) {
    next(error)
  }

})


// GET "/api/todo/:todoId" => enviar al FE los detalles de un Todo
router.get("/:todoId", async (req, res, next) => {

  const { todoId } = req.params

  try {
    
    const response = await Todo.findById(todoId)
    res.json(response)

  } catch (error) {
    next(error)
  }

})

// DELETE "/api/todo/:todoId" => borrar un Todo por su id
router.delete("/:todoId", async (req, res, next) => {

  const { todoId } = req.params

  try {
    
    await Todo.findByIdAndDelete(todoId)
    res.json("Documento borrado")

  } catch (error) {
    next(error)
  }

})

// PUT "/api/todo/:todoId" => recibir los nuevos detalles del Todo y editarlo
router.put("/:todoId", async (req, res, next) => {

  const { todoId } = req.params
  const { title, description, isUrgent } = req.body

  // if (title === "") {
  //   res.json("Los campos deben estar llenos")
  //   return
  // }

  try {

    await Todo.findByIdAndUpdate(todoId, {
      title,
      description,
      isUrgent
    })

    res.json("Documento actualizado")
    
  } catch (error) {
    next(error)
  }

})

module.exports = router;
