import { map } from 'async';
import React from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectCollectionForPreview } from '../../redux/shop/shop.selector';

import PreviewCollection from '../preview-collection/preview-collection';

import './collection.overview.scss'

const CollectionsOverview=({collections})=>(
    <div className='collections-overview'>
       {
            collections.map(({id,...otherCollectionProps})=>(
                <PreviewCollection key={id} {...otherCollectionProps}/>
            ))
        }  
    </div>
);

const mapStateToProps=createStructuredSelector({
    collections:selectCollectionForPreview,
})

export default connect(mapStateToProps)(CollectionsOverview)

