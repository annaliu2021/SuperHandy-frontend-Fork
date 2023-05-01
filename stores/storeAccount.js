import { defineStore } from 'pinia'
import { getAccountInfo, updateAccountInfo } from '@/services/apis'
const { spGet, spPatch } = useHttp()

export const storeAccount = defineStore("storeAccount", () => {
    const _user = ref({
        email: '',
        address: '',
        avatarPath: '',
        firstName: '',
        helperIntro: '',
        lastName: '',
        nickName: '',
        phone: '',
        posterIntro: '',
        helperSkills: ''
    });
    const user = computed({
        get () {
            return _user.value;
        },
    });

    //取得會員資料
    function getAccount () {
        spGet(getAccountInfo).then((response) => {
            // console.log(response, 'respaonse')
            if (!response || !response?.userInfoForm) {
                alert('取得會員資料失敗')
                return
            }

            const userInfoForm = response.userInfoForm
            Object.keys(_user.value).forEach((key) => {
                const value = userInfoForm[key]
                if (value) {
                    _user.value[key] = value
                }
            })
        }).catch((error) => {
            console.log(error)
            alert('取得會員資料失敗')
        });
    }


    //更新會員資料
    function updateAccount (data, callback) {
        spPatch(updateAccountInfo, data).then((response) => {
            //console.log(response, 'response')
            if (!response) {
                alert('更新會員資料失敗')
                return
            }
            if (typeof callback === 'function') {
                callback()
            }

        }).catch((error) => {
            console.log(error)
            alert('取得會員資料失敗')
        });
    }

    return {
        user,
        getAccount,
        updateAccount,
    }
});