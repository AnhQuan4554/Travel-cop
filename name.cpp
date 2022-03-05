#include<iostream>
using namespace std;
#include<vector>
void merge(int* a, int left,int mid,  int right) {
	int i = 0, j = 0;
	vector<int>v_left(a + left, a + mid + 1);
	vector<int>v_right(a + mid+1, a + right + 1);
	/*Lưu ý left thì chỉ có chỉ số i 
	right chỉ có chỉ số j cẩn thận nhầm 
	*/
	while (i < v_left.size() && j < v_right.size()) {
		if (v_left[i] <= v_right[j]) {
			a[left] = v_left[i];
			i++;
			left++;
		}
		else {
			a[left] = v_right[j];
			j++;
			left++;
		}
	}
		while (i < v_left.size()) {
			a[left] = v_left[i];
			i++;
			left++;
		}
		while (j < v_right.size()) {
			a[left] = v_right[j];
			j++;
			left++;
		}
}
void mergeSort(int* a, int left, int right) {
	if (left >= right)return;
	int mid = (left + right) / 2;
	mergeSort(a, left, mid);
	mergeSort(a, mid + 1, right);
	merge(a, left, mid, right);
}
int main() {
	int a[100];
	int n; cin >> n;
	for (int i = 0; i < n; i++) {
		cin >> a[i];
	}
	mergeSort(a, 0, n - 1);

	for (int i = 0; i < n; i++) {
		cout << a[i] << " ";
	}
	
	system("pause");
	return 0;
}
