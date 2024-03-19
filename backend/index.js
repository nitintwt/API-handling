import express from 'express'

const app = express()

app.get('/api/products' , (req , res)=>{
  const products =[
    {
      id: 1,
      name: 'table',
      price : 100,
    },
    {
      id: 2,
      name: 'lamp',
      price : 200,
    },
    {
      id: 3,
      name: 'sofa',
      price : 300,
    },
    {
      id: 4,
      name: 'car',
      price : 400,
    },
    {
      id: 5,
      name: 'fan',
      price : 500,
    },
  ]

  if (req.query.search){
   const filterProducts = products.filter(products => products.name.includes(req.query.search))
   res.send(filterProducts)
   return;
  }

  setTimeout(()=>{
    res.send(products)
  }, 3000)

})

const port = process.env.PORT || 3000

app.listen(port , ()=>{
  console.log(`Server runnning on port${port}`)
})