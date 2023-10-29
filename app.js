// const  Db = require('./dboperations');
// const  Order = require('./Order');
const  express = require('express');
const  bodyParser = require('body-parser');
const  cors = require('cors');
const  app = express();
const  router = express.Router();
const BaseResponse = require('./utils/BaseResponse');
const jwt = require('jsonwebtoken');

app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
app.use(cors());


function myExpiredTokenCallback(jwtHeader, jwtPayload) {
  const response = new ErrorResponse('Token Expired', 401);
  return response.serialize();
}

function myUnauthorizeCallback(jwtHeader) {
  const response = new ErrorResponse('Unauthorize', 401);
  return response.serialize();
}

function methodNotAllowedException(e) {
  const response = new ErrorResponse('Method not Allowed', 405);
  return response.serialize();
}

function notfoundException(e) {
  const response = new ErrorResponse('Endpoint Not Found', 404);
  return response.serialize();
}

function handleException(e) {
  const response = new ErrorResponse(e, 500);
  return response.serialize();
}

app.use((req, res, next) => {
  // ... your JWT middleware here ...
});

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    return res.status(401).send('Invalid token');
  }
  next();
});

app.use(myExpiredTokenCallback); // For expired tokens
app.use(myUnauthorizeCallback); // For unauthorized access
app.use(notfoundException); // For 404 errors
app.use(methodNotAllowedException); // For 405 errors
app.use(handleException); // For general errors

app.use('/api', router);

router.use((request, response, next) => {
  console.log('middleware');
  next();
});


 
// router.route('/orders').get((request, response) => {
//   Db.getOrders().then((data) => {
//     response.json(data[0]);
//   })
// })

// router.route('/orders/:id').get((request, response) => {
//   Db.getOrder(request.params.id).then((data) => {
//     response.json(data[0]);
//   })
// })

// router.route('/orders').post((request, response) => {
//   let  order = { ...request.body }
//   Db.addOrder(order).then(data  => {
//     response.status(201).json(data);
//   })
// })
  
  
const  port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is runnning at ' + port);