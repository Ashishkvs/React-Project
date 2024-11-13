const AppSetting = {

    name: "Newtam",
    cart:0,
};
export default AppSetting;

// simple to use 
// declare in  file an import and use

/// this is a good fit if our use case is only read data from global level and share across any component

// problem use case

// 1. if any component manipulate its value ( AppSetting.name = "Ashish") it will be reflecting in that context only
// due to that data incosistency arises
// It won't update othe using component ,they have still stale (old config data ) even after updating it from any component


// this is a normal javascript object
//it doesn't have state management capability

