/**
    * Bind all methods of an object to itself
    * @param {Array.<Function>} methodNames
    * @param {Object} instance
    Shamelessly copied from react-input-range: https://github.com/davidchin/react-input-range.git
    Author: David Chin
 */
export function autobind(methodNames, instance) {
    methodNames.forEach((methodName) => {
        instance[methodName] = instance[methodName].bind(instance);
    });
}
