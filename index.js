var types = {
    "boolean" : "boolean",
    "number" : "number",
    "string" : "string",
    "object" : "object",
    "null" : null,
    "undefined" : "undefined",
    "array" : Array.isArray
}

var isBoolean = ( isBoolean ) => {
    isParamExist( isBoolean );
    isBoolean = typeof(isBoolean) === types.boolean || false;
    return isBoolean;
}

var isNumber = ( isNumber ) => {
    isParamExist( isNumber );
    isNumber = typeof(isNumber) === types.number || false;
    return isNumber;
}

var isString = ( isString ) => {
    isParamExist( isString );
    isString = ( typeof(isString) === types.string || 
                 isString instanceof String ) || false;
    return isString;
}

var isNull = ( isNull ) => {
    isParamExist( isNull );
    isNull = isNull === types.null || false;
    return isNull;
}

var isObject = ( isObject ) => {
    isParamExist( isObject );
    isObject = ( typeof(isObject) === types.object  ||
                 isObject instanceof Object ) || false;
    return isObject;
}

var isArray = ( isArray ) => {
    isParamExist( isArray );
    isArray = types.array(isArray);
    return isArray;
}

var isUndefined = ( isUndefined ) => {
    isParamExist( isUndefined );
    isUndefined = typeof(isUndefined) === types.undefined || false;
    return isUndefined;
}

var isEmptyString = ( isEmpty ) => {
    isParamExist( isEmpty );
    isEmpty = isString( isEmpty.trim() ) && isEmpty.trim() === '';
    return isEmpty;
}

var isAssignable = ( isAssignable ) => {
    isParamExist( isAssignable );
    isAssignable = !isAssignable;
    return isAssignable;
}

var isParamExist = ( param ) => {
    if ( !param ) {
        throw new Error("The invoked function doesn't contain any parameter");
    }
}
module.exports = {
    "isBoolean" : isBoolean,
    "isNumber" : isNumber,
    "isString" : isString,
    "isNull" : isNull,
    "isObject" : isObject,
    "isArray" : isArray,
    "isUndefined" : isUndefined,
    "isEmptyString" : isEmptyString,
    "isAssignable" : isAssignable
};