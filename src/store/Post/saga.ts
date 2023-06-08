
import { call, put, takeEvery } from 'redux-saga/effects'
import { FETCH_POST, GET_POSTS_SUCCESS } from './type'
import { PayloadAction } from '@reduxjs/toolkit'
import { getPostResponse } from '../../HttpService/post'



export function* postSaga () {
    yield takeEvery(FETCH_POST, function* (action: PayloadAction) {
        try {
            const post:any = yield call(getPostResponse)
            yield(put({type: GET_POSTS_SUCCESS, payload: post }))
        } catch(e) {
            console.log(e)
        }
    })
}