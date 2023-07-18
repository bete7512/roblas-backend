import express from 'express'
import * as Company from '../controllers/company'
import * as News from '../controllers/news'
import * as Product from '../controllers/product'
import * as Team from '../controllers/team'
import { auth } from '../middleware/authorizer'
import {file_upload} from '../controllers/file_upload'

const router = express.Router()

router.get('/companies', async (req, res) => {
  await Company.get_all_companies(req, res)
})
router.get('/company/:id', async (req, res) => {
  await Company.get_company_by_id(req, res)
})
router.post('/company', auth, async (req, res) => {
  await Company.create_new_company(req, res)
})

router.put('/company/:id', auth, async (req, res) => {
  await Company.update_company(req, res)
})

router.delete('/company/:id', auth, async (req, res) => {
  await Company.delete_company(req, res)
})

router.get('/news', async (req, res) => {
  await await News.get_all_news(req, res)
})
router.get('/news/:id', async (req, res) => {
  await News.get_news_by_id(req, res)
})
router.post('/news', auth, async (req, res) => {
  await News.create_new_news(req, res)
})
router.put('/news/:id',auth, async (req, res) => {
  await News.update_news(req, res)
})

router.delete('/news/:id', async (req, res) => {
  await News.delete_news(req, res)
})

router.get('/products', async (req, res) => {
  await Product.get_all_products(req, res)
})
router.get('/product/:id', async (req, res) => {
  await Product.get_product_by_id(req, res)
})
router.post('/product', auth, async (req, res) => {
  await Product.create_new_product(req, res)
})
router.put('/product/:id', auth, async (req, res) => {
  await Product.update_product(req, res)
})

router.delete('/product/:id', auth, async (req, res) => {
  await Product.delete_product(req, res)
})

router.get('/teams', async (req, res) => {
  await Team.get_all_teams(req, res)
})
router.get('/team/:id', async (req, res) => {
  await Team.get_team_by_id(req, res)
})
router.post('/team', auth, async (req, res) => {
  await Team.create_new_team(req, res)
})

router.put('/team/:id', auth, async (req, res) => {
  await Team.update_team(req, res)
})

router.delete('/team/:id', auth, async (req, res) => {
  await Team.delete_team(req, res)
})


router.post('/file',auth,async (req,res)=>{
  await file_upload(req,res)
})
export default router
