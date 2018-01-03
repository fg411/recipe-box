/**
* Created by fg on 17-7-19.
*/
<template>
    <div class="image">
        <image-preview :preview="value" @close="$emit('input', null)" v-if="value"></image-preview>
        <div class="image__upload" v-else>
            <input type="file" accept="images/*" @change="upload">
        </div>
    </div>
</template>

<script type="text/javascript">
    import ImagePreview from './ImagePreview.vue';
    export default{
        props: {
            value: {
                type: [String, File],
                default: null
            }
        },
        components: {
            ImagePreview
        },
        methods: {
            upload(e){
                const files = e.target.files;
                console.log(files);
                if(files && files.length > 0){
                    this.$emit('input', files[0]);
                }
            }
        }
    }
</script>