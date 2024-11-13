const AppSetting = {

    name: "Newtam",
    cart:0,
};
export default AppSetting;

// simple to use 
// declare in  file an import and use

/// this is a goog fit if our use case is only read data from global level and share across any component

// problem use case

// 1. if nay component manipulate its value ( AppSetting.nam = "Ashishs") it will be reflecting in that context only
// due to that data incosistency arises
// It wont update othe using component ,they have still stale (old config data ) even after updating it from any component


// this is a normla javascript object
//it doesnt have state management capability

