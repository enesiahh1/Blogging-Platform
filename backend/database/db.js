const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("blogging_platform", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3307,
});

const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    surname: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

const Blog = sequelize.define("Blog", {
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
});

const Like = sequelize.define("Like", {});

// Associations
User.hasMany(Blog, { foreignKey: "userId", onDelete: "CASCADE" });
Blog.belongsTo(User, { foreignKey: "userId" });

User.belongsToMany(Blog, { through: Like, foreignKey: "userId" });
Blog.belongsToMany(User, { through: Like, foreignKey: "blogId" });

(async () => {
  await sequelize.sync({ force: true });
})();
//   module.exports = { sequelize, User, Blog, Like };
