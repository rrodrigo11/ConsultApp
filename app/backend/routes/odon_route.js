
router.post('/', async (req,res)=>{ //Ruta para agregar odontograma
    let {idOdontograma, historialClinico, dientes } = req.body;
    if(idOdontograma && historialClinico && dientes){
      let resp = await Sticker.guardarProducto({idOdontograma, historialClinico, dientes});
      if(resp){
          res.status(201).send({sticker: resp})
      }else{
          res.status(400).send({"error": "No se pudo guardar verifique su conexión"})
      }     
    }else {
      res.status(400).send({error: "Faltan datos"})
    }
    console.log(req.body.test)
  })