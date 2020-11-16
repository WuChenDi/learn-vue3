<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" :age="24" /> -->
    <!-- <p>{{ state.name }}</p> -->
    <p>{{ name }}</p>
    <p>{{ name2 }}</p>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  reactive,
  ref,
  computed,
  watchEffect
} from "vue";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

// interface Config {
//   name: string;
// }

export default defineComponent({
  name: "Home",
  // props: {
  //   age: {
  //     type: Number as PropType<number>
  //   },
  //   config: {
  //     type: Object as PropType<Config>,
  //     required: true
  //   }
  // },
  // components: {
  //   HelloWorld
  // },
  // data() {
  //   return {
  //     name: "wcd"
  //   };
  // },
  // mounted() {
  //   this.config;
  // },
  setup(props, { slots, attrs, emit }) {
    // let name = "wcd";
    // const state = reactive({
    //   name: "wcd"
    // });
    const nameRef = ref("wcd");
    setInterval(() => {
      // state.name += "1";
      nameRef.value += 1;
    }, 1000);

    const computedNameRef = computed(() => {
      return nameRef.value + "2";
    });

    watchEffect(() => {
      console.log(nameRef.value);
    });

    return {
      // state
      name: nameRef,
      name2: computedNameRef
    };
  }
});
</script>
