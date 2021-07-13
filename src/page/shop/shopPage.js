import React from 'react'

import CollectionOverview from '../../component/collection-overview/collection.overview';

import { Route } from 'react-router-dom';

import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selector';

import CollectionPage from '../collection/collection';

import { firestore,convertCollectionsSnapshotToMap } from '../../firebase/firebase.utilis';

import WithSpinner from '../../component/with-spinner/with-spinner';

 

import PreviewCollection from '../../component/preview-collection/preview-collection';
import { updateCollections } from '../../redux/shop/shop.action';

const CollectionOverviewWithSpinner=WithSpinner(CollectionOverview)
const CollectionPageWithSpinner=WithSpinner(CollectionPage);
class ShopPage extends React.Component{
  state={
    loading:true
  };
  unsubscribeFromSnapShot=null;

  componentDidMount(){
    const {updateCollections}=this.props;
    const collectionRef=firestore.collection('collection')

    collectionRef.get().then(snapshot=>{
      const collectionsMap=convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap)
      this.setState({loading:false})
    })
  }
  render(){
    const {match}=this.props;
    const {loading}=this.state;
    return(
      <div className='shop-page'>
       <Route exact path={`${match.path}`} 
       render={(props)=><CollectionOverviewWithSpinner isLoading={loading} {...props}/>}/>
        <Route path={`${match.path}/:collectionId`} 
        render={(props)=><CollectionPageWithSpinner isLoading={loading} {...props}/>}/>
     </div>
    )
  }
}

const mapDispatchToProps=dispatch=>({
  updateCollections:collectionsMap=>dispatch(updateCollections(collectionsMap))
})


export default connect(null,mapDispatchToProps)(ShopPage);

