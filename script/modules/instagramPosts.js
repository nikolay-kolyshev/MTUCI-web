/* Nanogram is available from global namespace */
const instagramParser = new Nanogram();
instagramParser.getMediaByUsername('instagram').then((media) => {
    console.log(media);
});