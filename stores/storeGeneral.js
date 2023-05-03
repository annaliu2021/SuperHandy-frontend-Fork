// import { defineStore } from "pinia";
// import { getCategories } from "@/services/apis/general";

// export const storeGeneral = defineStore("storeGeneral", () => {
//   const _taskCategories = ref([]);
//   const taskCategories = computed({
//     get() {
//       return _taskCategories.value;
//     },
//   });

//   async function getTaskCategories() {
//     try {
//       let { data } = await getCategories();
//       //console.log(data);
//       _taskCategories.value = data;
//     } catch (err) {
//       console.log({ err });
//     }
//   }

//   return {
//     taskCategories,
//     getTaskCategories,
//   };
// });
