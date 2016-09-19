import React , { Component} from 'react'

import { wrapDisplayName } from 'recompose'

const fetchApi = WrappedComponent => class extends WrappedComponent{

    fetchEndPoint(){
       super.constructor.fetch.forEach( ({url,state}) =>
            fetch(url)
            .then(resp => resp.json())
            .then(data => this.setState({ [state] : data}))
       )
    }

   componentDidMount() {
      this.fetchEndPoint();
   }

   render(){
    return super.render()
   }
}

export default WrappedComponent => {
   const Component =  fetchApi(WrappedComponent)
   Component.displayName = wrapDisplayName(WrappedComponent,'fetchApi')
   return Component
}
