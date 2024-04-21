#include<iostream>
using namespace std;

// void rotateArray(int arr[], int n, int d){
//     // now we will reverse the array
//     for(int i=0;i<d;i++){
//         int temp = arr[0];
//         for(int j=0;j<n-1;j++){
//             arr[j] = arr[j+1];
//         }
//         arr[n-1] = temp;
//     }
//     // printing the reversed array
//     cout<<"Rotated array: ";
//     for(int i=0; i<n; i++){
//         cout<<arr[i]<<" ";
//     }
// }


// reversal algorithm

// void reverseArray(int arr[], int start, int end)
// {
//     while (start < end)
//     {
//         swap(arr[start], arr[end]);
//         start++;
//         end--;
//     }
// }

// void rotateArray(int arr[], int n, int d)
// {
//     d = d % n; 
//     reverseArray(arr, 0, d - 1);
//     reverseArray(arr, d, n - 1);
//     reverseArray(arr, 0, n - 1);

//     // Printing the rotated array
//     cout << "Rotated array: ";
//     for (int i = 0; i < n; i++)
//     {
//         cout << arr[i] << " ";
//     }
// }

// approach 3
int gcd(int a, int b)
{
    int c = max(a, b), d = min(a, b);
    if (c % d == 0)
    {
        return d;
    }
    return gcd(d, c % d);
}

void rotateArray(int arr[],int n,int d){
    int no_of_cycles = gcd(n,d);
    int no_of_elements_in_cycle = n/no_of_cycles;

}

int main(){
    int n;
    cout<<"Enter the size of the array: ";
    cin>>n;

    int *arr;
    arr = new int[n];
    cout<<"Enter the elements of the array: ";
    for(int i=0; i<n; i++){
        cin>>arr[i];
    }

    int d;
    cout<<"Enter the number of elements you want to rotate: ";
    cin>>d;

    rotateArray(arr, n, d);
}
