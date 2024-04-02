
// Problem Link : https : // leetcode.com/problems/two-sum/description/

#include<iostream>
#include<vector>
                       using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
        int n = nums.size();
        for(int i =0;i<n;i++){
            for(int j=i+1;j<n;j++){
                if(nums[j] == target- nums[i]){
                    return {i, j};
                }
            }
        }
        return {};
}

int main(){
    vector<int> nums = {2, 7, 11, 15};
    int target = 9;
    vector<int> res = twoSum(nums, target);
    for(auto i: res){
        cout<<i<<" ";
    }
    return 0;
}