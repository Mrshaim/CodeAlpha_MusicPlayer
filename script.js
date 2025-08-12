// Music Player JavaScript
class MusicPlayer {
    constructor() {
        this.songs = [
            {
                id: 1,
                title: "Lofi Hip Hop Beat",
                artist: "Ehtesham's Collection",
                album: "Chill Vibes",
                duration: 180,
                cover: "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=400",
                src: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
            },
            {
                id: 2,
                title: "Ocean Waves",
                artist: "Nature Sounds",
                album: "Relaxation",
                duration: 240,
                cover: "https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg?auto=compress&cs=tinysrgb&w=400",
                src: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
            },
            {
                id: 3,
                title: "Urban Nights",
                artist: "City Beats",
                album: "Metropolitan",
                duration: 195,
                cover: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400",
                src: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
            },
            {
                id: 4,
                title: "Ethereal Dreams",
                artist: "Ambient Masters",
                album: "Transcendence",
                duration: 220,
                cover: "https://images.pexels.com/photos/2693208/pexels-photo-2693208.jpeg?auto=compress&cs=tinysrgb&w=400",
                src: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
            },
            {
                id: 5,
                title: "Jazz Cafe",
                artist: "Smooth Jazz Collective",
                album: "Coffee House",
                duration: 265,
                cover: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400",
                src: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
            },
            {
                id: 6,
                title: "Electronic Pulse",
                artist: "Synth Wave",
                album: "Digital Dreams",
                duration: 210,
                cover: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400",
                src: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
            },
            {
                id: 7,
                title: "Acoustic Sunset",
                artist: "Folk Harmony",
                album: "Golden Hour",
                duration: 185,
                cover: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=400",
                src: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
            },
            {
                id: 8,
                title: "Midnight Rain",
                artist: "Atmospheric Sounds",
                album: "Weather Moods",
                duration: 300,
                cover: "https://images.pexels.com/photos/1529360/pexels-photo-1529360.jpeg?auto=compress&cs=tinysrgb&w=400",
                src: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
            },
            {
                id: 9,
                title: "Piano Meditation",
                artist: "Classical Zen",
                album: "Inner Peace",
                duration: 275,
                cover: "https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg?auto=compress&cs=tinysrgb&w=400",
                src: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
            },
            {
                id: 10,
                title: "Tropical Breeze",
                artist: "Island Vibes",
                album: "Paradise",
                duration: 230,
                cover: "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=400",
                src: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
            },
            {
                id: 11,
                title: "Rock Anthem",
                artist: "Electric Storm",
                album: "Thunder",
                duration: 255,
                cover: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400",
                src: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
            },
            {
                id: 12,
                title: "Synthwave Nights",
                artist: "Neon Dreams",
                album: "Retro Future",
                duration: 245,
                cover: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400",
                src: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
            }
        ];

        this.currentSongIndex = 0;
        this.isPlaying = false;
        this.isShuffled = false;
        this.isRepeated = false;
        this.volume = 70;
        this.isMuted = false;
        this.likedSongs = [];
        this.showPlaylist = false;

        this.initializeElements();
        this.initializeEventListeners();
        this.loadSong(0);
        this.renderPlaylist();
        this.hideLoading();
    }

    initializeElements() {
        // Audio
        this.audio = document.getElementById('audioPlayer');
        
        // Song info
        this.songTitle = document.getElementById('songTitle');
        this.songArtist = document.getElementById('songArtist');
        this.songAlbum = document.getElementById('songAlbum');
        this.albumImage = document.getElementById('albumImage');
        this.albumArt = document.getElementById('albumArt');
        
        // Controls
        this.playPauseBtn = document.getElementById('playPauseBtn');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.shuffleBtn = document.getElementById('shuffleBtn');
        this.repeatBtn = document.getElementById('repeatBtn');
        
        // Progress
        this.progressBar = document.getElementById('progressBar');
        this.progressFill = document.getElementById('progressFill');
        this.currentTime = document.getElementById('currentTime');
        this.totalTime = document.getElementById('totalTime');
        
        // Volume
        this.volumeBtn = document.getElementById('volumeBtn');
        this.volumeBar = document.getElementById('volumeBar');
        this.volumeFill = document.getElementById('volumeFill');
        this.volumeText = document.getElementById('volumeText');
        
        // Actions
        this.likeBtn = document.getElementById('likeBtn');
        this.downloadBtn = document.getElementById('downloadBtn');
        this.shareBtn = document.getElementById('shareBtn');
        
        // Playlist
        this.playlistToggle = document.getElementById('playlistToggle');
        this.playlistContainer = document.getElementById('playlistContainer');
        this.playlist = document.getElementById('playlist');
        this.playlistCount = document.getElementById('playlistCount');
        
        // Loading
        this.loadingOverlay = document.getElementById('loadingOverlay');
    }

    initializeEventListeners() {
        // Audio events
        this.audio.addEventListener('loadedmetadata', () => this.updateDuration());
        this.audio.addEventListener('timeupdate', () => this.updateProgress());
        this.audio.addEventListener('ended', () => this.handleSongEnd());
        this.audio.addEventListener('play', () => this.setPlayingState(true));
        this.audio.addEventListener('pause', () => this.setPlayingState(false));

        // Control events
        this.playPauseBtn.addEventListener('click', () => this.togglePlay());
        this.prevBtn.addEventListener('click', () => this.previousSong());
        this.nextBtn.addEventListener('click', () => this.nextSong());
        this.shuffleBtn.addEventListener('click', () => this.toggleShuffle());
        this.repeatBtn.addEventListener('click', () => this.toggleRepeat());

        // Progress bar events
        this.progressBar.addEventListener('click', (e) => this.seekTo(e));

        // Volume events
        this.volumeBtn.addEventListener('click', () => this.toggleMute());
        this.volumeBar.addEventListener('click', (e) => this.setVolume(e));

        // Action events
        this.likeBtn.addEventListener('click', () => this.toggleLike());
        this.downloadBtn.addEventListener('click', () => this.downloadSong());
        this.shareBtn.addEventListener('click', () => this.shareSong());

        // Playlist events
        this.playlistToggle.addEventListener('click', () => this.togglePlaylist());

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
    }

    loadSong(index) {
        if (index < 0 || index >= this.songs.length) return;
        
        const song = this.songs[index];
        this.currentSongIndex = index;
        
        this.audio.src = song.src;
        this.songTitle.textContent = song.title;
        this.songArtist.textContent = song.artist;
        this.songAlbum.textContent = song.album;
        this.albumImage.src = song.cover;
        
        this.updateLikeButton();
        this.updatePlaylistHighlight();
        
        // Reset progress
        this.progressFill.style.width = '0%';
        this.currentTime.textContent = '0:00';
    }

    togglePlay() {
        if (this.isPlaying) {
            this.audio.pause();
        } else {
            this.audio.play().catch(e => console.log('Playback failed:', e));
        }
    }

    setPlayingState(playing) {
        this.isPlaying = playing;
        const icon = this.playPauseBtn.querySelector('i');
        
        if (playing) {
            icon.className = 'fas fa-pause';
            this.albumArt.classList.add('playing');
        } else {
            icon.className = 'fas fa-play';
            this.albumArt.classList.remove('playing');
        }
    }

    previousSong() {
        let newIndex;
        if (this.isShuffled) {
            newIndex = Math.floor(Math.random() * this.songs.length);
        } else {
            newIndex = this.currentSongIndex - 1;
            if (newIndex < 0) newIndex = this.songs.length - 1;
        }
        
        this.loadSong(newIndex);
        if (this.isPlaying) {
            this.audio.play().catch(e => console.log('Playback failed:', e));
        }
    }

    nextSong() {
        let newIndex;
        if (this.isShuffled) {
            newIndex = Math.floor(Math.random() * this.songs.length);
        } else {
            newIndex = (this.currentSongIndex + 1) % this.songs.length;
        }
        
        this.loadSong(newIndex);
        if (this.isPlaying) {
            this.audio.play().catch(e => console.log('Playback failed:', e));
        }
    }

    handleSongEnd() {
        if (this.isRepeated) {
            this.audio.currentTime = 0;
            this.audio.play().catch(e => console.log('Playback failed:', e));
        } else {
            this.nextSong();
        }
    }

    toggleShuffle() {
        this.isShuffled = !this.isShuffled;
        this.shuffleBtn.classList.toggle('active', this.isShuffled);
    }

    toggleRepeat() {
        this.isRepeated = !this.isRepeated;
        this.repeatBtn.classList.toggle('active', this.isRepeated);
    }

    seekTo(e) {
        const rect = this.progressBar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        const percentage = clickX / width;
        
        this.audio.currentTime = percentage * this.audio.duration;
    }

    updateProgress() {
        if (this.audio.duration) {
            const percentage = (this.audio.currentTime / this.audio.duration) * 100;
            this.progressFill.style.width = percentage + '%';
            this.currentTime.textContent = this.formatTime(this.audio.currentTime);
        }
    }

    updateDuration() {
        this.totalTime.textContent = this.formatTime(this.audio.duration);
    }

    setVolume(e) {
        const rect = this.volumeBar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        const percentage = Math.max(0, Math.min(100, (clickX / width) * 100));
        
        this.volume = percentage;
        this.audio.volume = percentage / 100;
        this.volumeFill.style.width = percentage + '%';
        this.volumeText.textContent = Math.round(percentage);
        
        this.updateVolumeIcon();
    }

    toggleMute() {
        this.isMuted = !this.isMuted;
        this.audio.muted = this.isMuted;
        this.updateVolumeIcon();
    }

    updateVolumeIcon() {
        const icon = this.volumeBtn.querySelector('i');
        if (this.isMuted || this.volume === 0) {
            icon.className = 'fas fa-volume-mute';
        } else if (this.volume < 50) {
            icon.className = 'fas fa-volume-down';
        } else {
            icon.className = 'fas fa-volume-up';
        }
    }

    toggleLike() {
        const songId = this.songs[this.currentSongIndex].id;
        const index = this.likedSongs.indexOf(songId);
        
        if (index > -1) {
            this.likedSongs.splice(index, 1);
        } else {
            this.likedSongs.push(songId);
        }
        
        this.updateLikeButton();
    }

    updateLikeButton() {
        const songId = this.songs[this.currentSongIndex].id;
        const isLiked = this.likedSongs.includes(songId);
        const icon = this.likeBtn.querySelector('i');
        
        if (isLiked) {
            icon.className = 'fas fa-heart';
            this.likeBtn.classList.add('liked');
        } else {
            icon.className = 'far fa-heart';
            this.likeBtn.classList.remove('liked');
        }
    }

    downloadSong() {
        const song = this.songs[this.currentSongIndex];
        // In a real app, this would trigger an actual download
        alert(`Downloading: ${song.title} by ${song.artist}`);
    }

    shareSong() {
        const song = this.songs[this.currentSongIndex];
        if (navigator.share) {
            navigator.share({
                title: song.title,
                text: `Check out this song: ${song.title} by ${song.artist}`,
                url: window.location.href
            });
        } else {
            // Fallback for browsers that don't support Web Share API
            const text = `Check out this song: ${song.title} by ${song.artist}`;
            navigator.clipboard.writeText(text).then(() => {
                alert('Song info copied to clipboard!');
            });
        }
    }

    togglePlaylist() {
        this.showPlaylist = !this.showPlaylist;
        this.playlistContainer.classList.toggle('show', this.showPlaylist);
    }

    renderPlaylist() {
        this.playlist.innerHTML = '';
        this.playlistCount.textContent = `${this.songs.length} songs`;
        
        this.songs.forEach((song, index) => {
            const item = document.createElement('div');
            item.className = 'playlist-item';
            if (index === this.currentSongIndex) {
                item.classList.add('active');
            }
            
            item.innerHTML = `
                <img src="${song.cover}" alt="${song.title}">
                <div class="playlist-item-info">
                    <div class="playlist-item-title">${song.title}</div>
                    <div class="playlist-item-artist">${song.artist}</div>
                </div>
                <div class="playlist-item-duration">${this.formatTime(song.duration)}</div>
            `;
            
            item.addEventListener('click', () => {
                this.loadSong(index);
                if (this.isPlaying) {
                    this.audio.play().catch(e => console.log('Playback failed:', e));
                }
            });
            
            this.playlist.appendChild(item);
        });
    }

    updatePlaylistHighlight() {
        const items = this.playlist.querySelectorAll('.playlist-item');
        items.forEach((item, index) => {
            item.classList.toggle('active', index === this.currentSongIndex);
        });
    }

    handleKeyboard(e) {
        switch(e.code) {
            case 'Space':
                e.preventDefault();
                this.togglePlay();
                break;
            case 'ArrowLeft':
                this.previousSong();
                break;
            case 'ArrowRight':
                this.nextSong();
                break;
            case 'ArrowUp':
                e.preventDefault();
                this.setVolumeByAmount(5);
                break;
            case 'ArrowDown':
                e.preventDefault();
                this.setVolumeByAmount(-5);
                break;
        }
    }

    setVolumeByAmount(amount) {
        const newVolume = Math.max(0, Math.min(100, this.volume + amount));
        this.volume = newVolume;
        this.audio.volume = newVolume / 100;
        this.volumeFill.style.width = newVolume + '%';
        this.volumeText.textContent = Math.round(newVolume);
        this.updateVolumeIcon();
    }

    formatTime(seconds) {
        if (isNaN(seconds)) return '0:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    hideLoading() {
        setTimeout(() => {
            this.loadingOverlay.classList.add('hidden');
        }, 1500);
    }
}

// Initialize the music player when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new MusicPlayer();
});

// Service Worker for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered'))
            .catch(error => console.log('SW registration failed'));
    });
}