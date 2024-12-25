CREATE DATABASE rock_paper_scissors;

USE rock_paper_scissors;

CREATE TABLE game_results (
    id INT AUTO_INCREMENT PRIMARY KEY,
    player_name VARCHAR(100),
    player_score INT,
    computer_score INT,
    result VARCHAR(20),
    date_played TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Example of inserting a game result
INSERT INTO game_results (player_name, player_score, computer_score, result)
VALUES ('John Doe', 3, 2, 'win');
