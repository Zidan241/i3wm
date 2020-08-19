#include <iostream>

const int N = 101;
long long w[N],v[N];
long long n,W;

long long knapsack(long long totalW , long long totalV , long long count){
    if(totalW+w[count] > W)return knapsack(totalW,totalV,(count+1));
    if(count == n)return totalV;
    long long o1 = knapsack((totalW+w[count]),(totalV+v[count]),(count+1));
    long long o2 = knapsack((totalW),(totalV),(count+1));
    return std::max(o1,o2);
}

int main(){
        std:: cin >> n >> W;
    for(int i=0; i<n; i++){
        std:: cin >> w[i] >> v[i];
    }
       std:: cout << knapsack(0,0,0);
      return 0; 
}