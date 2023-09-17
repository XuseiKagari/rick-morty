<template>
    <div class="character-block">
        <div class="character-block__image" 
            :class="publishedBooksMessage">
            <img :src="character.image" :alt="character.name">
        </div>
        <div class="character-block__info" >
            <span @click="detailedInfo">
                {{character.name}}
            </span>
            <span>
                {{character.status}} - {{ character.species}}               
            </span>
            <span>
            Last Know location: {{character.location.name}}
            </span>
        </div>   
    
    </div> 
</template>
<script> 
export default{
    computed: {
        publishedBooksMessage() {
        return this.character.status == "Alive" ? 'alive' : 
               this.character.status == "Dead" ? 'dead' : 'unknown'  
        }
    },
    name: 'character-block',
    props: {
        character: {
            type:  Object,
            required: true
        }
    },
    methods: {
        detailedInfo(){
         this.$router.push({ name: 'CharacterDetails', params:{id: this.character.id}})
        }
    }
}

</script>