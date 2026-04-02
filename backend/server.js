const app=require('./src/app');
const PORT=process.env.PORT || 5000;

const connectDB=require('./db.js');
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});