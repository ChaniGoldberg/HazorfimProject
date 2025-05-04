import Store from "../Store";

const validatorMiddleware = store => next => action => {
    if(action=='UPDATE_COUNT_PRODUCT'&&action.payload !=null)
    {
        next(action);
    }
    else if (action.type === 'UPDATE_COUNT_PRODUCT' && action.payload === null) {    
        console.log('Error - you didn’t insert a name');
    } else {
       return;
    }
}

export default validatorMiddleware;