let fact2text = document.getElementById("fact2text")
let fact2btn = document.getElementById("fact2btn")
let dogfact =[
    'Dogs are not our whole life, but they make our lives whole.',
    'Basset Hound gives birth to 6 to 8 puppies on average.',  
    'The average dog can run at a speed of up to 35 miles per hour.',
    'Dogs can distinguish between approximately 400 different smells.',
    'Dogs have stronger sense of smell than any other mammal. They can detect the presence of cancer and other diseases from a distance.',
    'A female dog will give birth to around six puppies, but the average litter size is four.',
    'Dogs are not colorblind, but they see fewer colors than humans. They can distinguish between blue, yellow, and gray, but not red or green.',
    'The Labrador Retriever has been on the AKCs top 10 most popular breeds list for 30 consecutive years—longer than any other breed.',
    'All puppies are born deaf.',
    'Dogs have about 1,700 taste buds. We humans have between 2,000 to 10,000.',
    'The worldwide dog populationis estimated to be 900 million',
    'Popular Dog Breeds => Labrador Retriever Golden Retriever, Pug, Chihuahua, DalmatianPoodlePit, BullSiberian HuskyMixed Breeds, Pembroke Welsh Corgis, German Shepherds, Beagles',
    'Labradoodle is excellent choice for families with children and other pets. It likes to play and spend time with members of its family.',
    'Australian Shepherd has great stamina and strong working ethics. It likes to run and perform various tasks (collect dirty laundry from the floor, for example).',
    'Dogs are extremely loyal and loving animals and certainly deserve to be considered our best friends.',
    'Although this is not true for all of them, most dogs are natural guards. It probably wont be the first time that a slight noise at the door makes your dog start barking loudly, wondering who it could be.',
    'They neglect their bed and prefer the floor',
    'They become stalkers when there is any kind of food',
    'Dogs really, really enjoy going for walks. As well as fulfilling their needs, it is a fun time for them. When they want to go out they may whine a little or insist on going by bringing you the lead in their mouth. They are so cute!',
    'Dogs rejoice when you arrive home and simply go crazy with happiness.',
    'They will love your baby as if it were their own',
    'Unlike cats, dogs will never get tired of being kissed. In fact, they can get a little insistent on getting attention.',
    'Dogs are definitely the best life partners. Their loyalty, beauty, companionship and understanding are simply the best gift anyone can have in life.',
    'Dogs sweat through their feet',
    'Dogs have night vision',
    'In ancient Egypt, dogs were treated as some of the most royal creatures.',
    'Rin Tin Tin, the famous German Shepherd, was nominated for an Academy Award.',
    'According to the Guinness World Records, the smallest dog ever recorded was Miracle Milly, the Chihuahua. Born in 2011, Milly was a miniscule 3.8 inches tall and weighed in at one pound.',
];
fact2btn.addEventListener("click", function fact2f(){
    let randomdogfact = dogfact[Math.floor(Math.random() * dogfact.length)]
    fact2text.innerText = randomdogfact;
})
