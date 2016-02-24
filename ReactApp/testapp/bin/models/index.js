var Sequelize = require('sequelize')
  , sequelize = new Sequelize('EventDB', 'user', 'password', {
      dialect: "postgres", // or 'sqlite', 'postgres', 'mariadb'
      port:    5432, // or 5432 (for postgres)
    });

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) { 
    console.log('Unable to connect to the database:', err);
  });
  
  var Event = sequelize.define('Event', {
	  Sport: Sequelize.String,
	  Location: Sequelize.String
  });
  
  sequelize
  .sync({ force: true })
  .then(function(err) {
    console.log('It worked!');
  }, function (err) { 
    console.log('An error occurred while creating the table:', err);
  });
  
 Event
	.find({where: { Sport: 'Basketball' } })
	.then(function(err, basketball) {
		if (!basketball) {
			console.log('No basketball events found,');
		} else {
			console.log('We found ' + basketball.Sport + '!');
			console.log('All attributes of john:', basketball.get());
		}
	});