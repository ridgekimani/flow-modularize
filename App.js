import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import AppNavigation from './src/navigators/';
import configureStore from './store';

const { store, persistor } = configureStore();

const App = () => (
  <Provider store={store}>
    <PersistGate
      loading={
        <View style={styles.activityContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
        }
      persistor={persistor}
    >
      <AppNavigation />
    </PersistGate>
  </Provider>
);

export const styles = {
  activityContainer: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
};

export default App;
