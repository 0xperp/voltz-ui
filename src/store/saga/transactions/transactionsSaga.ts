import { takeLatest } from 'redux-saga/effects';

import mintSaga from './mintSaga';
import settlePositionSaga from './settlePositionSaga';
import swapSaga from './swapSaga';
import updatePositionMarginSaga from './updatePositionMarginSaga';
import fcmSwapSaga from './fcmSwapSaga';
import fcmUnwindSaga from './fcmUnwindSaga';
import burnSaga from './burnSaga';

function* transactionsSaga() {
  yield takeLatest('mint', mintSaga);
  yield takeLatest('swap', swapSaga);
  yield takeLatest('updatePositionMargin', updatePositionMarginSaga);
  yield takeLatest('settlePosition', settlePositionSaga);
  yield takeLatest('fcmSwap', fcmSwapSaga);
  yield takeLatest('fcmUnwind', fcmUnwindSaga);
  yield takeLatest('burn', burnSaga); 
}

export default transactionsSaga;
