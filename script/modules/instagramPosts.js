export default function instagramPostsInit() {

    const instagramParser = new Nanogram();
    instagramParser.getMediaByUsername('mtuci.live').then(function (response) {

        // Get photos
        var photos = response.profile.edge_owner_to_timeline_media.edges;
        var items = [];

        let index = 0;

        for (var i = 0; i <= 4; i++) {

            if (index == 2)
                index++;

            var current = photos[i].node;

            var div = document.querySelectorAll(".section_social_inner_gallery_item")[index];
            var link = document.createElement('a');
            var img = document.createElement('img');

            var thumbnail = current.thumbnail_resources[4];
            var imgSrc = thumbnail.src;
            var imgAlt = current.accessibility_caption;

            var shortcode = current.shortcode;
            var linkHref = 'https://www.instagram.com/p/' + shortcode;

            div.classList.add();

            img.src = imgSrc;
            img.alt = imgAlt;

            link.href = linkHref;
            link.target = '_blank';

            link.appendChild(img);
            div.appendChild(link);

            items.push(div);

            index++;
        }

    });

}