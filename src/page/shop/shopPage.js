import React from 'react'

import CollectionOverview from '../../component/collection-overview/collection.overview';

import { Route } from 'react-router-dom';

import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selector';

import CollectionPage from '../collection/collection';


import PreviewCollection from '../../component/preview-collection/preview-collection';
const ShopPage=({match})=>{
    console.log(match.params.collectionId);
    return(
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionOverview}/>
      <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>
)}



export default ShopPage;

