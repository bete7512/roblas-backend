const express = require('express');
const Company = require('../controllers/company');
const News = require('../controllers/news');
const Product = require('../controllers/product');
const Team = require('../controllers/team');
const { auth } = require('../middleware/authorizer');
const { file_upload } = require('../controllers/file_upload');

const router = express.Router();

router.get('/companies', function(req, res) {
  Company.get_all_companies(req, res);
});

router.get('/company/:id', function(req, res) {
  Company.get_company_by_id(req, res);
});

router.post('/company', auth, function(req, res) {
  Company.create_new_company(req, res);
});

router.put('/company/:id', auth, function(req, res) {
  Company.update_company(req, res);
});

router.delete('/company/:id', auth, function(req, res) {
  Company.delete_company(req, res);
});

router.get('/news', function(req, res) {
  News.get_all_news(req, res);
});

router.get('/news/:id', function(req, res) {
  News.get_news_by_id(req, res);
});

router.post('/news', auth, function(req, res) {
  News.create_new_news(req, res);
});

router.put('/news/:id', auth, function(req, res) {
  News.update_news(req, res);
});

router.delete('/news/:id', function(req, res) {
  News.delete_news(req, res);
});

router.get('/products', function(req, res) {
  Product.get_all_products(req, res);
});

router.get('/product/:id', function(req, res) {
  Product.get_product_by_id(req, res);
});

router.post('/product', auth, function(req, res) {
  Product.create_new_product(req, res);
});

router.put('/product/:id', auth, function(req, res) {
  Product.update_product(req, res);
});

router.delete('/product/:id', auth, function(req, res) {
  Product.delete_product(req, res);
});

router.get('/teams', function(req, res) {
  Team.get_all_teams(req, res);
});

router.get('/team/:id', function(req, res) {
  Team.get_team_by_id(req, res);
});

router.post('/team', auth, function(req, res) {
  Team.create_new_team(req, res);
});

router.put('/team/:id', auth, function(req, res) {
  Team.update_team(req, res);
});

router.delete('/team/:id', auth, function(req, res) {
  Team.delete_team(req, res);
});

router.post('/file', auth, function(req, res) {
  file_upload(req, res);
});

module.exports = router;
