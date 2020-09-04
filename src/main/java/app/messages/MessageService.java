package app.messages;

import org.springframework.stereotype.Component;

@Component
public class MessageService {
    private final MessageRepository repository;

    public MessageService(MessageRepository repository) {
        this.repository = repository;
    }

    public Message save(String text) {
        return this.repository.saveMessage(new Message(text));
    }
}
