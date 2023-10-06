import { CommonActions } from '@react-navigation/native';

let _navigator: any;

// set a Top level navigator from App.js
function setTopLevelNavigator(navigatorRef: any) {
    _navigator = navigatorRef;
}

function back() {
    _navigator.dispatch(CommonActions.goBack());
}

// Navigate to particular screen 
// params -> (Name of screen parameters)
function navigate(routeName: string, params: any = {}) {
    _navigator.dispatch(
        CommonActions.navigate({
            name: routeName,
            params,
        }),
    );
}

// reset the current stack and navigate to a particular screen
// params -> (Name of screen, parameters)
function reset(routeName: string, params: any) {
    _navigator.dispatch(
        CommonActions.reset({
            index: 0,
            routes: [{ name: routeName }],
        }),
    );
}

export default {
    navigate,
    setTopLevelNavigator,
    reset,
    back,
};