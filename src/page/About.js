import Post from "./Post"
import AppSetting from './AppSetting'
export function About() {
    AppSetting.cart=1;
    return (<>
        <h1>Cart Count: {AppSetting.cart}</h1>
        <Post title={'About'} />

    </>)
}